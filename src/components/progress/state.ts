import { atom, useRecoilCallback, useRecoilValue, useSetRecoilState } from "recoil";

const progressState = atom({
    key: 'progressState',
    default: 1,
});

export const useProgressValue = () => {
    const length = useRecoilValue(progressState);
    return length;
};

export const useProgressUpdater = () => {
    const UpdateProgress = useSetRecoilState(progressState);
    return UpdateProgress;
};

export const useProgressIncrementUpdater = () => {
    return useRecoilCallback(({snapshot, set}) => async () => {
        const length = await snapshot.getPromise(progressState);
        const count = length + 1;
        set(progressState, count);
    })
}
