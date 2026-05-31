declare module '@instructure/canvas-media' {
  const UploadMedia: any
  const ClosedCaptionPanel: any
  const ClosedCaptionPanelV2: any
  const RocketSVG: any
  const useComputerPanelFocus: any
  const isAudio: any
  const isPreviewable: any
  const isVideo: any
  const sizeMediaPlayer: any
  const LoadingIndicator: any
  const saveMediaRecording: any
  const saveClosedCaptions: any
  const saveClosedCaptionsForAttachment: any
  const closedCaptionLanguages: any
  const sortedClosedCaptionLanguageList: any
  const captionLanguageForLocale: any
  const getTranslations: any
  const CONSTANTS: any
  const AUDIO_PLAYER_SIZE: any
  const trackPendoEvent: any

  export default UploadMedia
  export {
    ClosedCaptionPanel,
    ClosedCaptionPanelV2,
    RocketSVG,
    useComputerPanelFocus,
    isAudio,
    isPreviewable,
    isVideo,
    sizeMediaPlayer,
    LoadingIndicator,
    saveMediaRecording,
    saveClosedCaptions,
    saveClosedCaptionsForAttachment,
    closedCaptionLanguages,
    sortedClosedCaptionLanguageList,
    captionLanguageForLocale,
    getTranslations,
    CONSTANTS,
    AUDIO_PLAYER_SIZE,
    trackPendoEvent,
  }
}

declare module '@instructure/canvas-media/src/shared/FileSizeError' {
  const FileSizeError: any
  export default FileSizeError
}