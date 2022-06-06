import styled from "@emotion/styled"

const SizeSelectorWrap = styled.select`
  position: absolute;
  right: 0;
  margin-right: 16px;
  padding: 6px 12px;
  border-radius: 6px;
`

const SizeSelector = ({ value, onChange }) => {
  return (
    <SizeSelectorWrap value={value} onChange={onChange}>
      <option value={12}>12</option>
      <option value={18}>18</option>
      <option value={24}>24</option>
      <option value={36}>36</option>
    </SizeSelectorWrap>
  )
}

export default SizeSelector
