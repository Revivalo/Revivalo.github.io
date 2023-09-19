<?php
require 'vendor/autoload.php';

use Th3Shadowbroker\McClassicRcon\McClassicRcon;

header('Content-Type: application/json');

$command = $_POST['command'];

// Konfigurace pro RCON
$server = 'eu01.actinium.pt'; // IP adresa vašeho Minecraft serveru
$port = 25575;         // RCON port vašeho Minecraft serveru (standardně 25575)
$password = 'rychve';  // Heslo RCON na vašem Minecraft serveru

$rcon = new McClassicRcon($server, $port, $password);

try {
    $rcon->connect();

    // Omezte příkazy, které lze spustit z webového rozhraní
    if ($command === 'allowedCommand') {
        $rcon->sendCommand($command);
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Tento příkaz není povolen.']);
    }

    $rcon->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => 'Nelze se připojit k RCON.']);
}
?>
