import {
    GET_LAST_SCORE_L1,
    GET_LAST_SCORE_L2,
    GET_LAST_SCORE_N1,
    GET_LAST_SCORE_L1_SUCCESS,
    GET_LAST_SCORE_L2_SUCCESS,
    GET_LAST_SCORE_N1_SUCCESS,
    GET_LOGO,
    GET_LOGO_SUCCESS,
    GET_LAST_SCORE_ERROR,
    POST_NAV,
    GET_EVENT_DETAIL,
    GET_EVENT_DETAIL_STATS_SUCCESS,
    GET_EVENT_DETAIL_TIMELINE_SUCCESS,
    CLEAR_STATE
} from './actionsTypes';

export const clearState = () => ({
    type: CLEAR_STATE
})

export const getLastScroresL1 = (payload) => ({
    type: GET_LAST_SCORE_L1,
    payload
});

export const getLastScroresL1success = (payload) => ({
    type: GET_LAST_SCORE_L1_SUCCESS,
    payload
});

export const getLastScroresL2 = (payload) => ({
    type: GET_LAST_SCORE_L2,
    payload
});

export const getLastScroresL2success = (payload) => ({
    type: GET_LAST_SCORE_L2_SUCCESS,
    payload
});

export const getLastScroresN1 = (payload) => ({
    type: GET_LAST_SCORE_N1,
    payload
});

export const getLastScroresN1success = (payload) => ({
    type: GET_LAST_SCORE_N1_SUCCESS,
    payload
});

export const getLastScroresError = () => ({
    type: GET_LAST_SCORE_ERROR
});

export const getLogo = (payload) => ({
    type: GET_LOGO,
    payload
});

export const getLogoSuccess = (payload) => ({
    type: GET_LOGO_SUCCESS,
    payload
});

export const postNav = (payload) => ({
    type: POST_NAV,
    payload
});

export const getEventDetail = (payload) => ({
    type: GET_EVENT_DETAIL,
    payload
});

export const getEventDetailStatsSuccess = (payload) => ({
    type: GET_EVENT_DETAIL_STATS_SUCCESS,
    payload
});

export const getEventDetailTimelineSuccess = (payload) => ({
    type: GET_EVENT_DETAIL_TIMELINE_SUCCESS,
    payload
})
