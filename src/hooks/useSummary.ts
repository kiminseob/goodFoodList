import useSWR from 'swr';
import { summaryFetcher } from 'apis/naver';

function useSummary(id: string | undefined) {
  const { data, error, isLoading } = useSWR(
    id ? `/summary/${id}` : null,
    summaryFetcher
  );

  return { summary: data, isLoading };
}

export default useSummary;
