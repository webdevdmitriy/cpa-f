import './button.scss';

interface VolumetricButtonProps {
    label: string;
}

const VolumetricButton = ({label = ""}: VolumetricButtonProps) => {
    return (
        <div className="volumetric">
            <button className="volumetric__btn">{label}</button>
        </div>
    )
}

export default VolumetricButton;