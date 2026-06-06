export declare type BeforeResizeContext = {
    iframe: HTMLIFrameElement;
    settings: Settings;
    observedHeight: number;
    interactionState: InteractionState;
};

export declare type IframeChildInitEventData = {
    type: "iframe-child-init";
    targetElementSelector?: string;
    bodyPadding?: string;
    bodyMargin?: string;
};

export declare type IframeGetChildDimensionsEventData = {
    type: "iframe-get-child-dimensions";
};

export declare type IframeResizeEvent = MessageEvent<IframeResizeEventData>;

export declare type IframeResizeEventData = {
    type: "iframe-resized";
    width: number;
    height?: number;
};

export declare const initialize: InitializeFunction;

export declare function initializeChildListener(): void;

export declare type InitializeFunction = (settings?: Partial<Settings>, selector?: string | HTMLIFrameElement) => Promise<InitializeResult[]>;

export declare type InitializeResult = { unsubscribe: () => void; resize: () => void };

export declare type InteractionState = {
    isHovered: boolean;
};

export declare type RegisteredElement = {
    iframe: HTMLIFrameElement;
    settings: Settings;
    interactionState: InteractionState;
    initContext: { isInitialized: boolean; retryAttempts: number; retryTimeoutId?: number };
};

export declare type ResizeContext = {
    iframe: HTMLIFrameElement;
    settings: Settings;
    interactionState: InteractionState;
    previousRenderState: ResizeRenderState;
    nextRenderState: ResizeRenderState;
};

export declare type ResizeRenderState = { rect: DOMRect };

export declare type Settings = {
    offsetSize: number;
    checkOrigin: string[] | boolean;
    enableLegacyLibSupport: boolean;
    targetElementSelector?: string;
    bodyPadding?: string;
    bodyMargin?: string;
    onBeforeIframeResize?: (context: BeforeResizeContext) => boolean | undefined;
    onIframeResize?: (context: ResizeContext) => void;
};

export declare const updateParentScrollOnResize: ({ previousRenderState, nextRenderState, iframe }: ResizeContext) => void;
