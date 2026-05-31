/**
 * Fires a Pendo track event using the global Pendo agent.
 *
 * canvas-media is a standalone package that cannot import @canvas/pendo.
 * The Pendo agent is initialized by Canvas and exposed as window.canvasUsageMetrics.
 */
export declare function trackPendoEvent(eventName: string, props?: Record<string, unknown>): void;
