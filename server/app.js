const { exec } = require('child_process');
const path = '../maven/maven-modular/';
const packageName = 'devcoderopop';
const checkCommand = `pip show ${packageName}`;
const sbomCommand = `sbomgen ${path}`;

const runSbomGenerator = () => {
    exec(sbomCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error : ${error.message}`);
            return;
        }

        console.log(stdout);
    });
};

exec(checkCommand, (checkError, checkStdout, checkStderr) => {
    if (checkError) {
        console.error(`Error checking if ${packageName} is installed: ${checkError.message}`);
        return;
    }

    if (checkStdout) {
        runSbomGenerator();
    } else {
        const installCommand = `pip install ${packageName}`;

        exec(installCommand, (installError, installStdout, installStderr) => {
            if (installError) {
                console.error(`Error installing ${packageName}: ${installError.message}`);
                return;
            }
            console.log(`${packageName} installed successfully`);
            runSbomGenerator();
        });
    }
});