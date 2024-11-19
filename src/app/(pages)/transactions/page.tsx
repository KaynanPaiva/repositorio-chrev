import Actions from "@/components/pages/transactions/ActionsTransactions";
import Table from "@/components/pages/transactions/HeaderTable";
import BodyTable from "@/components/pages/transactions/BodyTable";

export default function Transactions() {
  return (
    <section>
      <div className="flex flex-col gap-6 px-6 pt-6 pb-2">
        <Actions />
        <div>
          <Table />
          <BodyTable />
        </div>
      </div>
    </section>
  );
}
