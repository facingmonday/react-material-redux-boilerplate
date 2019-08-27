import Navigation from './Navigation';
import NavigationLink from './NavigationLink';

export default [
  {
    component: Navigation,
    name: 'Navigation - Single Level',
    url: '/',
    mui: true,
    props: {
      classes: {},
      navigation: [
        {
          name: 'home',
          href: '/home',
          icon: 'home',
          label: 'Home',
        },
      ],
    },
  },
  {
    component: Navigation,
    name: 'Navigation - Multiple Level',
    url: '/',
    mui: true,
    props: {
      classes: {},
      navigation: [
        {
          name: 'home',
          href: '/home',
          icon: 'home',
          label: 'Home',
        },
        {
          name: 'settings',
          href: '/settings',
          icon: 'settings',
          label: 'Settings',
        },
        {
          name: 'users',
          icon: 'users',
          label: 'users',
          to: '/users',
          navigation: [
            {
              name: 'home',
              href: '/home',
              icon: 'home',
              label: 'Home',
            },
            {
              name: 'settings',
              href: '/settings',
              icon: 'settings',
              label: 'Settings',
            },
          ],
        },
      ],
    },
  },
  {
    component: Navigation,
    name: 'Navigation - Multiple Level',
    url: '/',
    mui: true,
    props: {
      classes: {},
      navigation: [
        {
          name: 'home',
          href: '/home',
          icon: 'home',
          label: 'Home',
        },
        {
          name: 'level1',
          icon: 'level1',
          label: 'Level 1',
          to: '/level1',
          navigation: [
            {
              name: 'someOther',
              href: '/someOther',
              icon: 'someOther',
              label: 'Some',
            },
            {
              name: 'level2',
              href: '/level2',
              icon: 'level2',
              label: 'Level 2',
              navigation: [
                {
                  name: 'level3',
                  href: '/level3',
                  icon: 'level3',
                  label: 'Level 3',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    component: NavigationLink,
    name: 'Navigation Link Item',
    url: '/',
    mui: true,
    props: {
      classes: {},
      link: {
        name: 'home',
        href: '/home',
        icon: 'home',
        label: 'Home',
      },
    },
  },
];
