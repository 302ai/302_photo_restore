import { LocaleType } from "./index";

// if you are adding a new translation, please use PartialLocaleType instead of LocaleType

const en: LocaleType = {
  Symbol: "en",
  Title: 'AI Old-Photo Restoration - 302.AI',
  Desc: "The Photo Generation Tool Powered By 302.AI",
  Auth: {
    NeedCode: 'Require share code',
    InputCode: 'The creator has enabled verification. Please enter the share code below',
    PlaceHodeer: 'Enter share code here',
    ToolBin: 'Tool is disabled. For more information, please visit',
    ToolDel: 'Tool is deleted. For more information, please visit',
    Submit: 'Submit',
    Remind: 'Remember share code',
    CodeError: 'Invalid code!',
    AccountBin: 'Account is disabled!',
    AccountDel: 'Account is deleted!',
    NetworkError: 'Network error. Please refresh the page and try again!',
  },
  Code: {
    TokenMiss: "This tool has been disabled/removed!", // -10001
    TokenInvalid: "This tool has been disabled/removed!", // -10002
    InternalError: 'Internal error. Please contact customer service!', // -10003
    AccountOut: 'Account is in arrears. Please recharge and try again!', // -10004
    TokenExpired: 'Token expired. Please refresh the page and try again!', // -10005
    TotalOut: 'The total limit for the tool has been reached. Please contact the administrator to recharge!', // -10006
    TodayOut: 'The daily limit for the tool has been reached. Please contact the administrator to recharge!', // -10007
    HourOut: 'This free tool\'s hour quota reached maximum limit', // -10012
    ErrorPrompt: 'Video prompt word violates regulations, please re-enter!', // -10011
  },
  Error: {
    InitError: 'Initialization data error!',
    FetchCancel: 'Request cancelled!',
    FetchError: 'Request error!',
    NetworkError: 'Network error. Please try again later!',
    TokenMiss: 'Invalid token. Please verify and try again!',
    AccountError: 'Account error',
    AccountUnvalid: 'Current account is invalid!',
    InternalError: 'Internal error. Please contact customer service!',
    BalanceOut: 'Account balance insufficent. Please recharge!',
    TokenExpire: 'Current token has expired!',
    TotalCostTip: 'Total limit reminder',
    TotalCostOut: 'The total limit for the tool has been reached!',
    TodayCostTip: 'Daily limit reminder',
    TodayCostOut: 'The daily limit for the tool has been reached!',
    FetchNotSupport: 'Request error, image is too large or format is not supported!'
  },
  System: {
    Notify: 'System Notification',
    Title: 'System Notification',
    Add: 'Add',
    Modify: 'Modify',
    Delete: 'Delete',
    Faild: 'Failed',
    Success: 'Success',
    NotNow: 'Not now',
    Cancel: 'Cancel',
    Start: 'Start',
    Back: 'Back',
    Download: 'Download',
    Confirm: 'Confirm',
    Error: 'Network Error',
    Wait: 'System is busy. Please wait!',
    BalanceOut: 'Account balance is insufficient!',
    Visit: 'Please view',
    Register: 'Please sign up',
    Create: 'to create your own tool',
    Task: 'Task',
    ToLarge: 'The image is too large, currently we do not support image processing for files larger than 10MB.',
    Nosupport: 'Free version does not support this feature'
  },
  Home: {
    Title: 'AI Old-Photo Restoration',
  },
  About: {
    Title: 'About',
    Name: 'AI Old-Photo Restoration',
    User: 'This photo tool is created by 302.AI user',
    Create: '',
    Tool: 'which is a platform for generating and sharing AI. 302.AI allows for the one-click generation and sharing of your own AI robot.',
    Model: 'This tool uses the following model',
    AllCost: 'The total limitation of this photo tool is',
    TodayCost: 'The daily limitation of this photo tool is',
    Usage: 'Usage:',
    Record: 'All records of this tool are stored on this machine and will not be uploaded. The user who generated this tool cannot see your records.',
    More: 'For more information, please view:',
    Tip: 'Content generated by AI, for reference only'
  },
  Action: {
    DropIn: 'Click or drag to upload',
    Enlarge: 'Enlarge',
    Enhance: 'Enhance',
    Colorize: 'Colorize-Fast',
    ColorizeV2: 'Colorize_SLow',
    Wait: 'Task submitted. Estimated wait time is about 1 minute',
    WaitVideo: 'Please wait 5-10 minutes.',
    DownloadImageTip: 'Photo restoration completed. Please download and save in time!',
    DownloadVideoTip: 'Video generate completed. Please download and save in time!',
    Break: "The repair task is in progress. Are you sure you want to go back?",
    CreatVideo: 'Generate video',
    CreatVideoPrompt: 'Please enter the content you want to generate based on the picture',
    DownloadImage: 'Download image',
    DownloadVideo: 'Download video',
    ReGenerateVideo: 'Re-generate',
    ResultOptions: [
      { label: 'Image', value: 'image', disabled: false },
      { label: 'Video', value: 'video', disabled: false },
    ],
  },
  History: {
    Title: 'History',
    Empty: 'Sorry, no history records!',
    Error: 'Data format error!',
    RollbackSuccess: 'Record rollback success!',
    RollbackFaild: 'Record rollback failed, data abnormality!',
    ClearSuccess: 'All history records have been deleted!',
    RecordType: 'Record type',
    ClearAll: 'Clear all history records',
    ClearAllSure: 'Are you sure you want to clear all history records?',
    Clear: 'Clear',
    NotNow: 'Not now',
    ItemCount: (count: number) => `Total ${count} history records`,
  },
  Example: {
    title: 'TRY AN EXAMPLE',
    action: 'Try with this example',
    demos: [
      {
        title: 'Enlarge',
        desc: 'Increase the resolution and details of the image, enlarge a low-resolution image to a higher resolution while maintaining the clarity and details of the image as much as possible. It can analyze patterns and structures in the image to enhance the details of the image, making the enlarged image clearer. Suitable for pixelated or blurred images',
        before: '/images/enlarge-before.png',
        after: '/images/enlarge-after.png',
      },
      {
        title: 'Enhance',
        desc: "Enhance the appearance and details of a person by identifying faces, bodies, and other specific body parts, making the person more vivid, realistic, and attractive in the image. This function can enhance the clarity of the person, highlighting more facial features and expression details",
        before: '/images/enhance-before.png',
        after: '/images/enhance-after.png',
      },
      {
        title: 'Colorize',
        desc: 'Automatically colorize black and white images to make them look more realistic and authentic. It can add appropriate colors to different elements and areas in black and white images by learning the relationship and color distribution between a large number of color images and black and white images. This function can add color to black and white photos, making the images more realistic and vivid',
        before: '/images/colorize-before.png',
        after: '/images/colorize-after.png',
      }
    ]
  }
};

export default en;