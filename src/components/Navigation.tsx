import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link } from '@tanstack/react-router'

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-x-8">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/chuck-movies">Chuck Movies</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
