import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

import { IMetaPropsItem } from "./HeadLayoutModels";

const HeadLayout = ({ metaProps }: { metaProps: IMetaPropsItem[] }) => {
  return (
    <Head>
      <title>Fairy Tail</title>
      {metaProps?.map((metaItem) => {
        return (
          <meta
            name={metaItem.name}
            content={metaItem.content}
            key={uuidv4()}
          />
        );
      })}
    </Head>
  );
};

export default HeadLayout;
