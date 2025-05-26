import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState<any[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState('')

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data?.user?.id) {
        setUserId(data.user.id)
        fetchItems(data.user.id)
      }
    }
    getUser()
  }, [])

  const fetchItems = async (userId: string) => {
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setItems(data || [])
  }

  const handleAdd = async () => {
    if (!title.trim() || !userId) return
    const { error } = await supabase.from('items').insert([
      { title, user_id: userId },
    ])
    if (error) console.error(error)
    else {
      setTitle('')
      fetchItems(userId)
    }
  }

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('items').delete().eq('id', id)
    if (error) console.error(error)
    else if (userId) fetchItems(userId)
  }

  const handleEdit = (item: any) => {
    setEditingId(item.id)
    setEditingTitle(item.title)
  }

  const handleUpdate = async () => {
    if (!editingTitle.trim() || !editingId) return
    const { error } = await supabase
      .from('items')
      .update({ title: editingTitle })
      .eq('id', editingId)
    if (error) console.error(error)
    else if (userId) {
      setEditingId(null)
      setEditingTitle('')
      fetchItems(userId)
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📋 Dashboard (CRUD)</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="New item"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="flex-1 border px-4 py-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          추가
        </button>
      </div>

      <ul className="space-y-2">
        {items.map(item => (
          <li
            key={item.id}
            className="border px-4 py-2 rounded flex justify-between items-center"
          >
            {editingId === item.id ? (
              <input
                value={editingTitle}
                onChange={e => setEditingTitle(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleUpdate()}
                className="flex-1 mr-2 border px-2 py-1"
              />
            ) : (
              <span
                className="flex-1 cursor-pointer"
                onDoubleClick={() => handleEdit(item)}
              >
                {item.title}
              </span>
            )}
            {editingId === item.id ? (
              <button
                onClick={handleUpdate}
                className="text-sm text-green-600 ml-2"
              >
                저장
              </button>
            ) : (
              <button
                onClick={() => handleDelete(item.id)}
                className="text-sm text-red-500 ml-2"
              >
                ❌ 삭제
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}