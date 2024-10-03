'use client';

import React, { useState } from 'react';
import { Button, Drawer, ScrollArea } from '@mantine/core';
import styles from './ToggleOptions.module.css';

const ToggleOptions: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.toggle}>
      <div onClick={() => setOpen(true)} className={styles.icon}>
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 18H10" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
          <path d="M4 12L16 12" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
          <path d="M4 6L20 6" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      <Drawer
        opened={open}
        onClose={() => setOpen(false)}
        padding="md"
        size="xs"
        position="left"
        withOverlay={false}
      >
        <ScrollArea type="scroll" scrollbarSize={8}>
          <div className={styles.options}>
            <div>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 18H10" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L16 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </ScrollArea>
      </Drawer>
    </div>
  );
};

export default ToggleOptions;
