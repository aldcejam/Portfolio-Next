import { InsertedProjects } from '../Projects/InsertedProjects' 
 
const categoriesRepeted: any = [];
const categoriesNoRepeated = InsertedProjects.filter(element => {
  const isDuplicate = categoriesRepeted.includes(element.projectCategory);

  if (!isDuplicate) {
    categoriesRepeted.push(element.projectCategory);

    return true;
  }

  return false;
})
export const onlyCategories = categoriesNoRepeated.map((projeto) => {
  return (
    {
      category: projeto.projectCategory
    }
  )
})
onlyCategories.unshift({ category: 'todos' })