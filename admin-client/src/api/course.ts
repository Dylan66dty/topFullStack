import http from '@/utils/request'

export const getCourseList = () => {
  return http.get('/courses')
}