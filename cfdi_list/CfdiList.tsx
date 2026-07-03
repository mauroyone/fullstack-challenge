// CfdiList.tsx
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CFDIS = gql`
  query GetCfdis($rfc: String!) {
    cfdis(rfc: $rfc) {
      uuid
      rfc
      total
      status
    }
  }
`;

export function CfdiList({ rfc }: { rfc: string }) {
  const [data, setData] = useState<any>(null);
  const { data: queryData, refetch } = useQuery(GET_CFDIS, { variables: { rfc } });

  useEffect(() => {
    refetch();
    setInterval(() => {
      refetch();
    }, 2000);
  }, [rfc]);

  useEffect(() => {
    setData(queryData?.cfdis);
  }, [queryData]);

  return (
    <div>
      {data && data.map((cfdi) => (
        <div>
          <span>{cfdi.uuid}</span> - <span>{cfdi.total}</span>
        </div>
      ))}
    </div>
  );
}
