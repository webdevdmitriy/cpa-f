interface VolumetricButtonProps {
    label?: string;
}

export default function VolumetricButton({label = ''}: VolumetricButtonProps) {
    return (
        <div className='volumetric'>
            <button className='volumetric__btn'>{label}</button>
        </div>
    )
}