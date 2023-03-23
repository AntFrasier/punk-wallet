import { Button, Image, Modal, Card } from "antd";
import { web3wallet } from "../hooks/WalletConnectV2Utils";
import React, {useEffect} from "react";



export default function SignModal({
  visible,
  setModalVisible,
  requestEvent,
  requestSession,
}) {
  // CurrentProposal values
  useEffect(() => {
    console.log("modal started")
  }, [])

  if (!requestEvent || !requestSession) return null;

  const chainID = requestEvent?.params?.chainId?.toUpperCase();
  const method = requestEvent?.params?.request?.method;
  const message = "test message"//getSignParamsMessage(requestEvent?.params?.request?.params);

  const requestName = requestSession?.peer?.metadata?.name;
  const requestIcon = requestSession?.peer?.metadata?.icons[0];
  const requestURL = requestSession?.peer?.metadata?.url;

  const { topic } = requestEvent;

  async function onApprove() {
    if (requestEvent) {
    //   const response = await approveEIP155Request(requestEvent);
    //   await web3wallet.respondSessionRequest({
    //     topic,
    //     response,
    //   });
    //   setModalVisible(false);
    }
  }

  async function onReject() {
    if (requestEvent) {
    //   const response = rejectEIP155Request(requestEvent);
    //   await web3wallet.respondSessionRequest({
    //     topic,
    //     response,
    //   });
    //   setModalVisible(false);
    }
  }



  return (
    <Modal >
      <Card >
        <Card >
          <Image
            
            source={{
              uri: requestIcon,
            }}
          />

          <p>{requestName}</p>
          <p>{requestURL}</p>

          <p>{message}</p>

          <p>Chains: {chainID}</p>

          <Card >
            <p>Method:</p>
            <p>{method}</p>
          </Card>

          <Card>
            <Button onPress={() => onReject()} title="Cancel" />
            <Button onPress={() => onApprove()} title="Accept" />
          </Card>
        </Card>
      </Card>
    </Modal>
  );
}
