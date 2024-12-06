import styles from "./RuneConnector.module.css";
type RuneConnectorProps = {
  enabled: boolean;
};
const RuneConnector = ({ enabled }: RuneConnectorProps) => {
  return (
    <div className={styles.connectorContainer}>
      <div
        className={styles.runeConnector}
        style={{ backgroundColor: enabled ? "blue" : "none" }}
      ></div>
    </div>
  );
};
export default RuneConnector;
