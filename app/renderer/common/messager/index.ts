export const MESSAGE_EVENT_NAME_MAPS = {
  OPEN_FORM_MODAL: 'open-form-modal',
};

class Messager {
  send = (eventName: string, payload: any) => {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: {
          payload: payload,
        },
      })
    );
  };

  receive = (e: any, messageHandler: Function) => {
    if (messageHandler) {
      const payload = e?.detail?.payload;
      messageHandler(payload);
    }
  };
}

const messager = new Messager();

export default messager;
