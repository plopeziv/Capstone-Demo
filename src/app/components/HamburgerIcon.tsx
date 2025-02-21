export default function HamburgerIcon({ openSideNav }) {
  return (
    <button
      aria-label='openSideNav'
      className='group size-8 absolute top-4 left-4 flex flex-col justify-around'
      onClick={openSideNav}
    >
      <div className='h-1 w-full bg-[#B3B6B7] group-hover:bg-white' />
      <div className='h-1 w-full bg-[#B3B6B7] group-hover:bg-white' />
      <div className='h-1 w-full bg-[#B3B6B7] group-hover:bg-white' />
    </button>
  );
}
