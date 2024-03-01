export const formatDate = (item) => {
    const dateFormat = new Date (item)
    const date = String(dateFormat.getDay()).padStart(2,0)
    const month = String(dateFormat.getMonth() + 1).padStart(2,0)
    const year = dateFormat.getFullYear()

    return `${year}-${month}-${date}`
}