import { useFilteredData } from "../context/filter-context";

export const GetColor = (filteredProducts) => {
  const { state: { itemColor } } = useFilteredData();
  if (itemColor.length !== 0)
    filteredProducts = filteredProducts.filter((item) => itemColor.includes(item.productColor))
  return filteredProducts;
}

export const GetCost = (filteredProducts) => {
  const { state: { itemCost } } = useFilteredData();
  if (itemCost !== "")
    filteredProducts = filteredProducts.filter((item) => Number(itemCost.substring(8)) >= item.cost && item.cost >= Number(itemCost.substring(0, 4)))
  return filteredProducts;
}

export const GetType = (filteredProducts) => {
  const { state: { itemType } } = useFilteredData();
  if (itemType.length !== 0)
    filteredProducts = filteredProducts.filter((item) => itemType.includes(item.type))
  return filteredProducts;
}

export const SortedPrice = (data) => {
  const { state: { sortBy } } = useFilteredData();
  if (sortBy === "High_to_low") return [...data].sort((a, b) => b.cost - a.cost);
  else if (sortBy === "Low_to_high")
    return [...data].sort((a, b) => a.cost - b.cost);
  return data;
}