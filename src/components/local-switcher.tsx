"use client";

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '@radix-ui/themes';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
      <Button variant="surface" size="3" mx="5"
          disabled={isPending}
        >
          {localeActive}
          <FaChevronDown/>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={() => onSelectChange('en')}>
          English
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => onSelectChange('es')}>
          Español
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
