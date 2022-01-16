export interface QrData {
  id: string,
  guests: Guest[]
}

export interface Guest {
  name: string,
  role?: string
}