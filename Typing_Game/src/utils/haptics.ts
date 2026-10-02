export type FeedbackHaptic = 'correct' | 'wrong' | 'reveal';

export const playFeedbackHaptic = async (feedback: FeedbackHaptic): Promise<void> => {
  try {
    const { Haptics, NotificationType } = await import('@capacitor/haptics');
    const notificationTypes = {
      correct: NotificationType.Success,
      reveal: NotificationType.Warning,
      wrong: NotificationType.Error,
    } as const;

    await Haptics.notification({ type: notificationTypes[feedback] });
  } catch {
    // Haptics are available on native devices only; web play should stay silent.
  }
};
