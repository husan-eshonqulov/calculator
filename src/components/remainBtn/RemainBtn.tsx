import SignBtn from '../signBtn/SignBtn';

function RemainBtn({ sign, color, bg }: {sign: string; color?: string; bg?: string}) {
    return (
        <div onClick={() => console.log(sign)}>
            <SignBtn sign={sign} color={color} bg={bg} />
        </div>
    );
}

export default RemainBtn;