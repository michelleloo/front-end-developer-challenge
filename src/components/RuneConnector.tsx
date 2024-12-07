import styles from "./RuneConnector.module.css";
type RuneConnectorProps = {
  enabled: boolean;
};
const RuneConnector = ({ enabled }: RuneConnectorProps) => {
  return (
    <div className={styles.connectorContainer}>
      <div
        className={styles.runeConnector}
        style={{ opacity: enabled ? 1 : 0.5 }}
      ></div>
    </div>
  );
};
export default RuneConnector;
