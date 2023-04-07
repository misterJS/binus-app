import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParams } from "../../shared";
import { getProjectAsClient, getProjectAsWorker } from "../../store/client";

export const useTransaction = () => {
  const dispatch = useDispatch();
  const { set, slug, status, page, perPage, } = useQueryParams();

  const transaction = useSelector((state: any) => state.client.transaction);

  useEffect(() => {
    const payload = { userIn: 'yusdion3007@gmail.com', status, page, perPage };
    const action = slug === 'client' ? getProjectAsClient(payload) : getProjectAsWorker(payload);
    if (transaction.resultCode !== 200) {
      dispatch(action);
    }
  }, [dispatch, getProjectAsClient, getProjectAsWorker, slug, status, page, perPage]);  

  const getProjectBy = useCallback((slug: string) => {
    set("slug", slug);
    const payload = { status };
    const action = slug === 'client' ? getProjectAsClient(payload) : getProjectAsWorker(payload);
    dispatch(action);
  }, [set, status]);

  return {
    getProjectByWorker: useCallback(() => getProjectBy('worker'), [getProjectBy]),
    getProjectByClient: useCallback(() => getProjectBy('client'), [getProjectBy]),
    set,
    projectList: transaction.project,
    slug
  };
};
