import { atom, useRecoilValue, useSetRecoilState } from "recoil";

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