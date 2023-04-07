import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryParams } from "../../shared";
import { getProjectList } from "../../store/client";

export const useGardenSetup = () => {
    const dispatch = useDispatch();
    const { category, maxPoint, minPoint, sortBy, page, perPage, set } = useQueryParams();
    const garden = useSelector((state: any) => state.client.garden);

    const getProjectsList = useCallback(() => {
        dispatch(
            getProjectList({
                category,
                minPoint,
                maxPoint,
                sortBy,
                perPage,
                page,
            })
        );
    }, [
        category,
        minPoint,
        maxPoint,
        sortBy,
        page,
        perPage,
        dispatch
    ]);

    useEffect(() => {
        if (garden.projectList.length === 0) {
            getProjectsList();
        }
    }, []);

    return {
        getProjectsList,
        set,
        garden,
    };
};
