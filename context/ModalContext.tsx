import { useState, createContext, useContext, ReactNode } from 'react';

// type postContextType = {
//   title: string;
//   description: string;
//   content: string;
// };

// const postContextDefaultValues: postContextType = {
//   title: "test0",
//   description: "test1",
//   content: "test2",
// };

type modalContextType = [
  {
    title: string;
    body: string;
    isOpen: boolean;
    saveSetIsOpen: (boolean) => void;
  }
];

const modalContextDefaultValues: modalContextType = [
  {
    title: 'This is a Modal Title',
    body: 'This is the body of the Modal.',
    isOpen: false,
    saveSetIsOpen: () => {},
  },
];

const ModalContext = createContext<modalContextType>(modalContextDefaultValues);

type Props = {
  children: ReactNode;
  title: string;
  body: string;
};

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children, title = '', body = '' }: Props) {
  const [isOpen, setIsOpen] = useState(modalContextDefaultValues[0].isOpen);

  const saveSetIsOpen = (data: boolean) => {
    console.log(data);
    setIsOpen(data);
  };

  const value: modalContextType = [
    {
      title: title || modalContextDefaultValues[0].title,
      body: body || modalContextDefaultValues[0].body,
      isOpen,
      saveSetIsOpen,
    },
  ];

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    </>
  );
}
