export default function Messages() {
    let isPremium = true;

    let premiumMessage = isPremium ? "Thank you for being a premium member!" : "Upgrade to premium to enjoy exclusive features!";

    return (
        <div>
            <h3>{premiumMessage}</h3>
        </div>
    );
}