import { deprecated, createReducer, ActionType } from 'typesafe-actions';

const { createStandardAction } = deprecated;

// 액션 타입 지정
const CHANGE_PROFILE = 'profile/CHANGE_PROFILE';

// 액션 생성 함수
export const changeProfile = createStandardAction(CHANGE_PROFILE)<string>();

// 액션 객체 타입
const actions = { changeProfile };
type ProfileAction = ActionType<typeof actions>;

// 관리할 상태
type ProfileState = {
  profileStr: string;
  // 0: 온라인 | 1: 자리비움 | 2: 다른용무중 | 3: 오프라인
};

// 초기 상태 선언
const initialState: ProfileState = {
  profileStr: 'ONLINE' // 초기 상태 온라인 설정
};

// 리듀서
const profile = createReducer<ProfileState, ProfileAction>(initialState, {
  [CHANGE_PROFILE]: (state, { payload: profileStr }) => ({
    profileStr: profileStr
  })
});

export default profile;
