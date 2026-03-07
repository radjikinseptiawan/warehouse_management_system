"use client"
import './globals.css'
import TopBar from "./component/ux/TopBar";
import Sliders from "./component/ux/Sliders";
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isOpen,setIsOpen] = useState(false)

  return (
    <html lang="en">
      <body className="antialiased">
      <Provider store={store}>
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="sidebar"
                className="top-10"
                initial={{ x: -256 }}
                animate={{ x: 0 }}
                exit={{ x: -256 }}
                transition={{ duration: 0.3 }}
              >
                <Sliders/>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <TopBar clicker={() => setIsOpen(!isOpen)} />

            <main className="p-4 mt-12">
              {children}
            </main>
          </div>

        </div>        
      </Provider>

      </body>
    </html>
  );
}