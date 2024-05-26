interface ITagProps {
  title: string
}

export function Tag({ title }: ITagProps) {
  return (
    <span className='bg-yellow-light text-yellow-dark py-1 px-2 rounded-full text-tag font-bold cursor-default'>{title}</span>
  )
}