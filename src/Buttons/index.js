import {ButtonLiContainer, ButtonImage, ImageItem} from './styledComponents'

const Buttons = props => {
  const {buttonDetails, onGetButtonId} = props
  const {id, imageUrl} = buttonDetails
  const lowerCaseId = id.toLowerCase()

  const onClickButton = () => {
    onGetButtonId(id, imageUrl)
  }

  return (
    <ButtonLiContainer>
      <ButtonImage
        type="button"
        data-testid={`${lowerCaseId}Button`}
        onClick={onClickButton}
      >
        <ImageItem src={imageUrl} alt={id} />
      </ButtonImage>
    </ButtonLiContainer>
  )
}

export default Buttons
