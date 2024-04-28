import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMOnthRevenue() {
  const response = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
