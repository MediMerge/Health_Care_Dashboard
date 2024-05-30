export const metadata = {
  title: 'Sales | MediMerge',
  description: 'A Healthcare stock monitoring application for hospital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
            {children}
      </div>  
   
  )
}
