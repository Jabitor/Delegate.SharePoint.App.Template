ls *.ts -Recurse -Exclude *.d.ts | % {
	$newName = "$($_).pp";
	if(Test-Path $newName) {
		Remove-Item $newName
	}
	Rename-Item $_ $newName
}
