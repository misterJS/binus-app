import { useQuery } from "../constant";

export const useQueryParams = () => {
  const { get, set } = useQuery();

  const slug = get("slug");
  const tab = get("tab");
  const category = get("category");
  const maxPoint = get("maxPoint");
  const minPoint = get("minPoint");
  const sortBy = get("sortBy");
  const page = get("perPage");
  const perPage = get("perPage");
  const keyword = get("keyword");
  const startDate = get("startDate");
  const endDate = get("endDate");
  const status = get("status");
  const typeIds = get("typeIds");
  const conditionIds = get("conditionIds");
  const typeListIds = get("typeListIds");
  const conditionListIds = get("conditionListIds");
  const mode = get("mode");

  return {
    set,
    get,
    page: page || 1,
    perPage: perPage || 10,
    sortBy,
    category,
    maxPoint,
    minPoint,
    keyword,
    tab,
    slug,
    mode,
    typeIds,
    startDate,
    endDate,
    status,
    conditionIds,
    typeListIds,
    conditionListIds
  } as const;
};
