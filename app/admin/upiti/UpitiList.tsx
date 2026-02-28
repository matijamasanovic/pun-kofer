'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Mail, Phone, MapPin, Calendar, Trash2, Eye, EyeOff } from 'lucide-react'

type Upit = {
  id: string
  ime: string
  email: string
  telefon?: string
  poruka?: string
  aranzman?: string
  procitan: boolean
  created_at: string
}

export default function UpitiList({ upiti }: { upiti: Upit[] }) {
  const router = useRouter()
  const [expanded, setExpanded] = useState<string | null>(null)

  async function handleToggleRead(id: string, trenutno: boolean) {
    await supabase.from('upiti').update({ procitan: !trenutno }).eq('id', id)
    router.refresh()
  }

  async function handleDelete(id: string) {
    if (!confirm('Jesi li siguran da želiš obrisati ovaj upit?')) return
    await supabase.from('upiti').delete().eq('id', id)
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-3">
      {upiti.map((u) => (
        <div
          key={u.id}
          className={`rounded-2xl border bg-card shadow-sm transition-all ${
            u.procitan ? 'border-border opacity-70' : 'border-primary/30 bg-primary/5'
          }`}
        >
          <div
            className="flex items-center justify-between gap-4 p-4 cursor-pointer"
            onClick={() => setExpanded(expanded === u.id ? null : u.id)}
          >
            <div className="flex items-center gap-4">
              <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${u.procitan ? 'bg-muted-foreground/30' : 'bg-primary'}`} />
              <div>
                <p className="font-semibold text-foreground text-sm">{u.ime}</p>
                <p className="text-xs text-muted-foreground">{u.email}</p>
              </div>
              {u.aranzman && (
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {u.aranzman}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground hidden md:block">
                {new Date(u.created_at).toLocaleDateString('sr-Latn', {
                  day: 'numeric', month: 'short', year: 'numeric'
                })}
              </span>
              <button
                onClick={(e) => { e.stopPropagation(); handleToggleRead(u.id, u.procitan) }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {u.procitan ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleDelete(u.id) }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:border-red-300 hover:text-red-500 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {expanded === u.id && (
            <div className="border-t border-border px-4 py-4 flex flex-col gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a href={`mailto:${u.email}`} className="hover:text-primary transition-colors">{u.email}</a>
                </div>
                {u.telefon && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a href={`tel:${u.telefon}`} className="hover:text-primary transition-colors">{u.telefon}</a>
                  </div>
                )}
                {u.aranzman && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    {u.aranzman}
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary shrink-0" />
                  {new Date(u.created_at).toLocaleDateString('sr-Latn', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </div>
              </div>
              {u.poruka && (
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Poruka</p>
                  <p className="text-sm leading-relaxed text-foreground">{u.poruka}</p>
                </div>
              )}
              <div className="flex gap-2 pt-1">
                
                  <a
                  href={`mailto:${u.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Odgovori emailom
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}