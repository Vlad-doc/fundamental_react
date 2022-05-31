export const getPageCount = (totaltCount, limit) => {
  return Math.ceil(totaltCount / limit)
}
