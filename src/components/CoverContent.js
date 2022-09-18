export const CoverContent = ({className, title, subtitle}) => {
    return (
        <div className={'cover__content ' + className}>
            <span className="cover__title">{title}</span>
            <p>{subtitle}</p>
        </div>
    )
  }