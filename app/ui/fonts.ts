import { Inter, Lusitana } from 'next/font/google';

// 通过调用Inter()函数创建了一个字体对象，赋值给inter
// 在调用Inter()函数时，指定了要加载的字体子集
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
