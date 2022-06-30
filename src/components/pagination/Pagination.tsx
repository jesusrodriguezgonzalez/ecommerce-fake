import { Pagination } from "react-bootstrap";

export function PaginationComponent() {
  return (
    <div className="d-flex justify-content-center mt-5 mb-0.5">
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item active>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        {/* <Pagination.Ellipsis />
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item> */}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
