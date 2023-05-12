import { Avatar, AvatarFallback } from '@/ui/avatar'

export default function Navbar() {
  return (
    <div className='flex flex-row items-center justify-between'>
      <h1>Golem Sandbox</h1>
      <div>
        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
