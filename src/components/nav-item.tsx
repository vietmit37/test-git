import Link from 'next/link';

export const NavItemData = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Teacher',
    url: '/teachers',
  },
];
interface NavItemProps{
  activeItem:number,
  isMobile:boolean
}
function NavItem({ activeItem, isMobile }:NavItemProps) {
  return (
    <>
      <div className="lg:gap-x-4 space-x-5 hidden lg:flex">
        {NavItemData && NavItemData.map((item, index) => (
          <Link key={item.name} href={item.url}>
            <span className={`${activeItem === index ? 'dark:text-green-800 text-[crimson]' : 'dark:text-white text-black'} font-semibold text-xl`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
      <div className="lg:hidden mt-5">
        {NavItemData && NavItemData.map((item, index) => (
          <Link key={item.name} href={item.url}>
            <span className={`${activeItem === index ? 'dark:text-green-800 text-[crimson]' : 'dark:text-white text-black'} font-semibold text-xl block py-5`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      )}
    </>
  );
}
export default NavItem;
